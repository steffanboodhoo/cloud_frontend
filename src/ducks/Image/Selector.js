
export const get_images = ({image}) => {
    return image.getIn(['images']);
}
export const get_selected_image = ({image}) => {
    const images = image.getIn(['images']);
    images.forEach( el => {
        if (el.instance_type == image.getIn(['selected_instance_type']))
            return el
    })
    return null;
}