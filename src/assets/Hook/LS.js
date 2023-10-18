import success from 'sweetalert';
import error from 'sweetalert';

const getItemForLC = ()=>{
    const getLc = localStorage.getItem('card');
    if(getLc){
        return JSON.parse(getLc);
    }
    return [];
}

const saveItemLc = id =>{
    const saveData = getItemForLC();
    const isExzit = saveData.find(data => data===id);
    if(!isExzit){
        saveData.push(id);
        localStorage.setItem('card', JSON.stringify(saveData) );
        success("Good job!", "You clicked the button!", "success");
    }else{
        error("Alredy Add!", "You clicked the button!", "error");
    }
}





export {getItemForLC,saveItemLc}