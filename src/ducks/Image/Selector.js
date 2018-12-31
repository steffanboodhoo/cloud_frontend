
export const get_images = ({image}) => {
    return image.getIn(['images']);
}
export const get_selected_image = ({image}) => {
    const images = image.getIn(['images']);
    for( let i in images )
        if (images[i].instance_type == image.getIn(['selected_instance_type']))
            return images[i]
    return null;
}