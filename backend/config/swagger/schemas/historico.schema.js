module.exports = {
    Historico: {
        type: 'object',
        properties: {
            id: { type: 'integer', example: 1 },
            id_service: { type: 'integer', example: 10 },
            status_anterior: {
                type: 'string',
                enum: ['ABERTO', 'EM_ANDAMENTO', 'CONCLUIDO', 'CANCELADO'],
                example: 'ABERTO'
            },
            status_novo: {
                type: 'string',
                enum: ['ABERTO', 'EM_ANDAMENTO', 'CONCLUIDO', 'CANCELADO'],
                example: 'EM_ANDAMENTO'
            },
            comentario: { type: 'string', example: 'Status alterado durante a execução do serviço' },
            observacao: { type: 'string', example: 'Cliente solicitou alteração na cor da pintura' },
            data_hora: { type: 'string', format: 'date-time', example: '2024-01-15T10:30:00Z' }
        }
    },
    Timeline: {
        type: 'object',
        properties: {
            servico: {
                type: 'object',
                properties: {
                    id: { type: 'integer', example: 1 },
                    categoria: { type: 'string', example: 'Pintura' },
                    status_atual: { type: 'string', example: 'EM_ANDAMENTO' },
                    data_criacao: { type: 'string', format: 'date-time', example: '2024-01-10T08:00:00Z' }
                }
            },
            timeline: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        tipo: {
                            type: 'string',
                            enum: ['MUDANÇA_STATUS', 'OBSERVAÇÃO'],
                            example: 'MUDANÇA_STATUS'
                        },
                        de: { type: 'string', example: 'ABERTO' },
                        para: { type: 'string', example: 'EM_ANDAMENTO' },
                        comentario: { type: 'string', example: 'Status alterado pelo proprietário' },
                        observacao: { type: 'string', example: 'Cliente aprovou o orçamento' },
                        data: { type: 'string', format: 'date-time', example: '2024-01-10T09:15:00Z' }
                    }
                }
            }
        }
    }
};