import imageController from './controller.js'


export const baseUrl = imageController.baseUrl




export default [
	{
        method: 'GET',
        route: '/:size/:shape/:bg',
        handlers: [
            imageController.index
        ]
    },
]