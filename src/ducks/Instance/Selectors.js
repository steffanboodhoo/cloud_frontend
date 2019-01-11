export const getMetric = ({instance}, machine_name) => {
    return instance.getIn(['metrics', machine_name]);
};