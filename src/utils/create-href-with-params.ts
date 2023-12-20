import * as _ from "lodash";

const createHrefWithParams = (
    href: string,
    params: { [K: string]: string | number }
) => {
    let newHref = href;

    const entries = _.entries(params);

    _.forEach(entries, ([key, value]) => {
        newHref = newHref.replace(`:${key}`, value.toString());
    });

    return newHref;
};

export default createHrefWithParams;
