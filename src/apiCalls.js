import axios from 'axios';

export const  getCities = async () => {
    try {
        let data = await axios.get(`http://localhost:4000/api/V1/cities`)
        return data
    }
    catch (error) {
        throw error
    }
}
export const  cargarDatos = async (dataInput) => {
    console.log(dataInput)
    try {
        let data = await axios.post(`http://localhost:4000/api/V1/cities`,{dataInput})
        return data
    }
    catch (error) {
        throw error
    }
}

export const  eliminarCiudad = async (id) => {
    console.log(id)
    try {
        let data = await axios.delete(`http://localhost:4000/api/V1/cities/${id}`)
        return data
    }
    catch (error) {
        throw error
    }
}
export const  modificarCiudad = async (id,dataInput) => {
    console.log(id, dataInput)
    try {
        let data = await axios.put(`http://localhost:4000/api/V1/cities/${id}`, {dataInput})
        return data
    }
    catch (error) {
        throw error
    }
}