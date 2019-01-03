
export const get_templates = ({template}) => {
    return template.getIn(['templates']);
}
export const get_selected_template = ({template}) => {
    const templates = template.getIn(['templates']);
    for( let i in templates )
        if (templates[i].template_id == template.getIn(['selected_template_id']))
            return templates[i]
    return null;
}