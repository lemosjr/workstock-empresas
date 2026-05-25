module.exports = {
    '/services/{id}/historico': {
        get: {
            tags: ['Histórico de Serviços'],
            summary: 'Buscar histórico completo de um serviço',
            description: 'Retorna todo o histórico de mudanças de status e observações de um serviço específico',
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: { type: 'integer' },
                    description: 'ID do serviço'
                }
            ],
            responses: {
                200: {
                    description: 'Histórico retornado com sucesso.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    service_id: { type: 'integer' },
                                    total_registros: { type: 'integer' },
                                    historico: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Historico' }
                                    }
                                }
                            }
                        }
                    }
                },
                404: {
                    description: 'Serviço não encontrado.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    error: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/services/{id}/timeline': {
        get: {
            tags: ['Histórico de Serviços'],
            summary: 'Buscar timeline completa de um serviço',
            description: 'Retorna uma timeline detalhada incluindo mudanças de status e observações manuais',
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: { type: 'integer' },
                    description: 'ID do serviço'
                }
            ],
            responses: {
                200: {
                    description: 'Timeline retornada com sucesso.',
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Timeline' }
                        }
                    }
                },
                404: {
                    description: 'Serviço não encontrado.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    error: { type: 'string' }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/services/{id}/historico/observacao': {
        post: {
            tags: ['Histórico de Serviços'],
            summary: 'Adicionar observação manual ao histórico',
            description: 'Adiciona uma observação manual ao histórico do serviço (apenas dono do serviço ou ADMIN)',
            security: [{ BearerAuth: [] }],
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: { type: 'integer' },
                    description: 'ID do serviço'
                }
            ],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                comentario: {
                                    type: 'string',
                                    maxLength: 255,
                                    example: 'Cliente solicitou alteração no prazo'
                                },
                                observacao: {
                                    type: 'string',
                                    maxLength: 1000,
                                    example: 'Cliente pediu para antecipar o serviço para a próxima semana'
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: 'Observação adicionada com sucesso.',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: { type: 'string', example: 'Observação adicionada ao histórico com sucesso!' },
                                    data: { $ref: '#/components/schemas/Historico' }
                                }
                            }
                        }
                    }
                },
                401: {
                    description: 'Token não fornecido ou inválido.'
                },
                403: {
                    description: 'Acesso negado. Você não tem permissão.'
                },
                404: {
                    description: 'Serviço não encontrado.'
                }
            }
        }
    }
};