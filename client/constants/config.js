// API_Notification_Messages
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data i being loaded, Please wait'
    },
    success: {
        title: 'Success',  
        message: 'Data successful loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occurred while fetching response from the server. Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occurred while parsing request data'
    },
    networkError: {
        title: 'Network Error',
        message: 'Network connection failed. Please check your internet connection'
    },
}


// API Service Call
// Sample Request
// Need Service Call: { url: '/', method: 'POST/GET/PUT/DELETE' params: true/false, query: true/false }
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: { url: '/login', method: 'POST'},
    uploadFile: { url: '/file/upload', method: 'POST'},
    createPost: { url: 'create', method: 'POST'},
    getAllPosts: { url: '/posts', method: 'GET', params: true}, 
    getPostById: {url: 'post', method: 'Get', query: true },
    updatePost: {url: 'update', method: 'PUT', query: true},
    deletePost: {url: 'delete', method: 'DELETE', query: true},
    newComment: {url: '/comment/new', method: 'POST'},
    getAllComments: {url: 'comments', method: 'GET', query: true},
    deleteComment: {url: 'comment.delete', method: 'DELETE', query: true}
};