const Joi = require('joi');

/**
 * Validação de Postagem
 * Realiza validações de entrada para operações com postagens.
 * Utiliza a biblioteca Joi para definir schemas de validação.
 */
class PostagemValidation {
    // Valida criação de postagem (descricao max 1400 caracteres, fotos URIs válidas)
    createSchema(req, res, next) {
        const schema = Joi.object({
            descricao: Joi.string().max(1400).allow(null, '').messages({
                'string.max': 'A descrição não pode exceder 1400 caracteres.'
            }),
            fotos: Joi.array().items(Joi.string().uri()).allow(null).messages({
                'array.base': 'O campo "fotos" deve ser um array de URLs.',
                'string.uri': 'Todas as fotos devem ser URLs válidas.'
            })
        });

        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const messages = error.details.map(detail => detail.message);
            return res.status(400).json({ error: messages });
        }
        next();
    }

    // Valida atualização de postagem
    updateSchema(req, res, next) {
        const schema = Joi.object({
            descricao: Joi.string().max(1400).allow(null, '').messages({
                'string.max': 'A descrição não pode exceder 1400 caracteres.'
            }),
            fotos: Joi.array().items(Joi.string().uri()).allow(null).messages({
                'array.base': 'O campo "fotos" deve ser um array de URLs.',
                'string.uri': 'Todas as fotos devem ser URLs válidas.'
            })
        });

        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const messages = error.details.map(detail => detail.message);
            return res.status(400).json({ error: messages });
        }
        next();
    }

    // Valida ID da postagem (número inteiro positivo)
    validatePostagemIdParam(req, res, next) {
        const schema = Joi.object({
            id: Joi.number().integer().positive().required().messages({
                'number.base': 'O ID deve ser um número.',
                'number.positive': 'O ID deve ser um número positivo.',
                'any.required': 'O ID é obrigatório.'
            })
        });

        const { error } = schema.validate(req.params, { abortEarly: false });
        if (error) {
            const messages = error.details.map(detail => detail.message);
            return res.status(400).json({ error: messages });
        }
        next();
    }

    // Valida ID do usuário (número inteiro positivo)
    validateUserIdParam(req, res, next) {
        const schema = Joi.object({
            userId: Joi.number().integer().positive().required().messages({
                'number.base': 'O ID do usuário deve ser um número.',
                'number.positive': 'O ID do usuário deve ser um número positivo.',
                'any.required': 'O ID do usuário é obrigatório.'
            })
        });

        const { error } = schema.validate(req.params, { abortEarly: false });
        if (error) {
            const messages = error.details.map(detail => detail.message);
            return res.status(400).json({ error: messages });
        }
        next();
    }
}

module.exports = new PostagemValidation();
