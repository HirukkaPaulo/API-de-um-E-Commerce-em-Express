import { Router } from 'express';
import { remove, update, save, get, getAll, getByEmail } from './index.js';

const router = Router();

router.get('/',async (_,res) => {
    try{
        const data = await getAll();
        if(data){
            return res.status(200).json({data})  
        }else{
            return res.status(404).json([{msg: "Não existe nenhum cliente na lista."}])
        }
    }catch(error){
        res.status(500).json({data:"Não foi possível obter a lista de clientes."})
    }
})

router.get('/:id',async (req,res) => {
    try{ 
        const data = await get(req.params.id);
        if(data){
            res.status(200).json({data})
        }else{
            return res.status(404).json({msg: "Não existe nenhum cliente com este ID."})
        }
    }catch(error){
        return res.status(500).json({error:'Erro interno do servidor.'})
    }
  
})

router.post('/',async (req,res) => {
    const clienteExistente = await getByEmail(req.body.email)
    try{
        if(clienteExistente){
            return res.status(404).json({msg: "Já existe um cliente cadastrado com este email."})   
        }else{
            const data = await save(req.body);
            res.status(200).json({data})
        }  
    }catch(error){
        res.json({data:"Não foi possível cadastrar o cliente."})
    }
    
})

router.put('/:id',async (req,res) => {
    try{
        const data = await update(req.params.id,req.body);
        if(data){
            res.status(200).json({data}) 
        }else{
            return res.status(404).json({msg: "Não existe nenhum cliente com este ID para atualizar."})
        }
    }catch(error){
        res.status(500).json({data:"Não foi possível atualizar o cliente."})
    }
    
})

router.delete('/:id',async (req,res) => {
    try{
        const data = await remove(req.params.id);
        if(data){
            res.status(200).json({data})
        }else{
            return res.status(404).json({msg: "Não existe nenhum cliente com este ID para ser deletado."})
        }
    }catch(error){
        res.status(500).json({data:"Não foi possível deletar o cliente."})
    }
    
})



export default router;