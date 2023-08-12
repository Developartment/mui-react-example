import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as _ from "lodash";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";

import { paths } from "@/routing/paths";

const Breadcrumb = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const params = useParams();

    const map = {
        [paths.users.index]: t("labels.users"),
    };

    const skipMap: string[] = [];

    const path = useMemo(() => {
        const pairs = _.toPairs(params);

        return location.pathname
            .split("/")
            .filter(Boolean)
            .map((l) => {
                const pair = _.find(pairs, ([, value]) => value === l);
                const key = pair?.[0];

                return key ? `:${key}` : l;
            });
    }, [location, params]);

    const pathSize = _.size(path);

    return (
        <Breadcrumbs sx={{ ml: -1 }}>
            <span />

            {_.map(path, (__, index) => {
                const last = index === pathSize - 1;
                const href = `/${path.slice(0, index + 1).join("/")}`;
                const skip = _.includes(skipMap, href);

                if (skip) return undefined;

                return last ? (
                    <Typography variant="body2" fontWeight={500} key={href}>
                        {map[href]}
                    </Typography>
                ) : (
                    <Link
                        variant="body2"
                        underline="hover"
                        fontWeight={500}
                        href={href}
                        key={href}
                    >
                        {map[href]}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default Breadcrumb;
