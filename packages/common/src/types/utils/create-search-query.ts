const createSearchQuery = (values: object) => {
    const params = new URLSearchParams(values as Record<string, string>);
    return "?" + params.toString();
};

export default createSearchQuery;
