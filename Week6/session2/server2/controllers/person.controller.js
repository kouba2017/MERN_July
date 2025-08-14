import Person from "../models/person.model.js"

export const personController ={
    // contain a bunch of functions CRUD
    //CREATE 
    createPerson: async(req ,res)=>{
        try {
            const newPerson = await Person.create(req.body);
            console.log(newPerson);
            return res.status(201).json(newPerson)
            
        } catch (error) {
            console.log('Error',error);
            return res.status(500).json(err)
        }
    },
    //READ ALL
    getAllPersons: async(req ,res)=>{
        try {
            const allPersons = await Person.find();
            // console.log(newPerson);
            return res.status(200).json(allPersons)
            
        } catch (error) {
            console.log('Error',error);
            return res.status(500).json(err)
        }
    },
    getOnePerson: async(req ,res)=>{
        try {
            const id= req.params.id
            const onePerson = await Person.findById(id);
            return res.status(200).json(onePerson)
            
        } catch (error) {
            console.log('Error',error);
            return res.status(500).json(err)
        }
    },
    //DELETE
    deletePerson: async(req ,res)=>{
        try {
            const id= req.params.id
            await Person.findByIdAndDelete(id);
            return res.status(204).send()
            
        } catch (error) {
            console.log('Error',error);
            return res.status(500).json(err)
        }
    },
    updatePerson: async(req ,res)=>{
        try {
            const options={
                new:true, //mongoose to give you the object after update
                runValidators:true //keep the same create validations
            }
            const id= req.params.id
            const updatedPerson = await Person.findByIdAndUpdate(id,req.body,options);
            return res.status(201).json(updatedPerson)
            
        } catch (error) {
            console.log('Error',error);
            return res.status(500).json(err)
        }
    }

}
// export that created dictionary 
