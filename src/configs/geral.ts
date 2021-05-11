interface IGeralConfigDTO {
    environment: string
    server_port: string
    api_host: string
    api_url: string
    email_admin: string
}

const _environment = (): string => {
    const env = process.env.NODE_ENV || 'development'
    return env
}

const _serverPort = (): string => {
    const env = process.env.SERVER_PORT || '3005'
    return env
}

const _apiHost = (): string => {
    const env = process.env.API_HOST || 'localhost'
    return env
}

const _apiURL = (): string => `http://${_apiHost()}:${_serverPort()}`

const _emailAdmin = (): string => {
    const env = process.env.EMAIL_ADMIN || 'venzelseo@gmail.com'
    return env
}

const config: IGeralConfigDTO = {
    environment: _environment(),
    server_port: _serverPort(),
    api_host: _apiHost(),
    api_url: _apiURL(),
    email_admin: _emailAdmin(),
}

const { environment, server_port, api_host, api_url, email_admin } = config

export { environment }
export { server_port }
export { api_host }
export { api_url }
export { email_admin }
