import { Router } from 'express';
import { remove, update, save, get, getAll } from './index.js';

const router = Router();

router.get('/',async (_,res) => {
    try{
        const data = await getAll();
        res.status(200).json({data})
    }catch(error){
        res.json({data:"Não foi possível obter a lista de vendas."})
    }
})

router.get('/:id',async (req,res) => {
    try{
        const data = await get(req.params.id);
        res.status(200).json({data})
    }catch(error){
        res.json({data:"Não foi possível encontrar a venda."})
    }
    
})

router.post('/',async (req,res) => {
    try{
        const data = await save(req.body);
    res.status(200).json({data})
    }catch(error){
        res.json({data:"Não foi possível cadastrar a venda."})
    }
    
})

router.put('/:id',async (req,res) => {
    try{
        const data = await update(req.params.id,req.body);
        res.status(200).json({data})
    }catch(error){
        res.json({data:"Não foi possível atualizar a venda."})
    }
    
})

router.delete('/:id',async (req,res) => {
    try{
        const data = await remove(req.params.id);
    res.status(200).json({data})
    }catch(error){
        res.json({data:"Não foi possível deletar a venda."})
    }
    
})

export default router;