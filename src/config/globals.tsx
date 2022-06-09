import env from './env.json'

// Exponer variables del env json
const environment = process.env.NODE_ENV
export const base_url = environment === 'production' ? 
                        (env?.main_api?.prod ? env.main_api.prod : undefined):
                        (env?.main_api?.dev ? env.main_api.dev : undefined)
export const socket_url = environment === 'production' ? 
                        (env?.main_socket?.prod ? env.main_socket.prod : undefined):
                        (env?.main_socket?.dev ? env.main_socket.dev : undefined)
export const HOME_ROUTE = env?.home_route ? env.home_route : '/'