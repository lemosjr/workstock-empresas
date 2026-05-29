const {Postagem } = require('../model/index');
const logger = require('../config/logger');

/**
 * Repositório de Postagem
 * Responsável por toda comunicação com o banco de dados relativa a postagens.
 * Implementa operações CRUD e consultas customizadas.
 */
class PostagemRepository {
    // Cria uma nova postagem no banco de dados
    async create(postagemData) {
        try {
            return await Postagem.create(postagemData);
        } catch (error) {
            logger.error(`Erro ao criar postagem: ${error.message}`);
            throw error;
        }
    }

    // Busca todas as postagens de um usuário específico, ordenadas por data/hora decrescente
    async findByUserid(id, limit = 20, offset = 0) {
        return await Postagem.findAll({
            where: { id_usuario: id },
            order: [['data_hora', 'DESC']],
            limit,
            offset
        });
    }
    
    // Busca todas as postagens do sistema, ordenadas por data/hora decrescente
    async findAll(limit = 20, offset = 0) {
        return await Postagem.findAll({
            order: [['data_hora', 'DESC']],
            limit,
            offset
        });
    }

    // Busca uma postagem específica pelo ID
    async findById(id) {
        return await Postagem.findByPk(id);
    }

    // Atualiza uma postagem existente
    async update(id, updateData) {
        const postagem = await this.findById(id);
        if (!postagem) return null;
        return await postagem.update(updateData);
    }

    // Deleta uma postagem pelo ID
    async delete(id) {
        const postagem = await this.findById(id);
        if (!postagem) return false;
        await postagem.destroy();
        return true;
    }

    // Deleta uma postagem pelo ID
    async deleteByPostId(id) {
        return await Postagem.destroy({ where: { id } });
    }
}

module.exports = new PostagemRepository();