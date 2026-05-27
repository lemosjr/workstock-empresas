const avaliacaoService = require('../service/AvaliacaoService');

class AvaliacaoController {
    
    // CREATE - POST
    async create(req, res) {
        try {
            const avaliacao = await avaliacaoService.createAvaliacao(req.body);
            res.status(201).json(avaliacao);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    // async getAll(req, res) {
    //     try {
    //         const { category, tipo_imovel, status } = req.query;
    //         const requests = await avaliacaoService.getAllRequests({ category, tipo_imovel, status });
    //         return res.status(200).json(requests);
    //     } catch (error) {
    //         return res.status(400).json({ error: error.message });
    //     }
    // }

    // async getById(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const request = await avaliacaoService.getRequestById(id);
    //         return res.status(200).json(request);
    //     } catch (error) {
    //         return res.status(404).json({ error: error.message });
    //     }
    // }

    // async update(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const updatedRequest = await avaliacaoService.updateRequest(id, req.body);
            
    //         return res.status(200).json({
    //             message: 'Solicitação de serviço atualizada com sucesso!',
    //             data: updatedRequest
    //         });
    //     } catch (error) {
    //         return res.status(400).json({ error: error.message });
    //     }
    // }

    // async delete(req, res) {
    //     try {
    //         const { id } = req.params;
    //         await avaliacaoService.deleteRequest(id);
            
    //         return res.status(200).json({
    //             message: 'Solicitação de serviço excluída com sucesso do sistema.'
    //         });
    //     } catch (error) {
    //         return res.status(404).json({ error: error.message });
    //     }
    // }
}

module.exports = new AvaliacaoController();