const fs=require('fs')
const chalk=require('chalk')

const getnotes=function(){
return "your notes...."
}

const addnote=function(title,body)
{
    const note=loadnote()

    const dupnote=note.filter(function(note){
        return note.title==title
})           
debugger
if(dupnote.length != 0 ){
    return "note already exists"
}

//alternate method

// var i=0
// const l=note.length
// for(i=0;i<l;i++)
// {
//     if(note[i].title == title)
//         return "Note already exists"
// }

    note.push(
        {
            title: title,
            body:body
        }
    )

    const noteJSON=JSON.stringify(note)
    fs.writeFileSync('note.json',noteJSON)
    return "note added"
    
}
const remove=(title)=>{                                  
    const note=loadnote()
    var dupnote=note.filter((note)=> note.title != title)
    // const l=note.length
    // for(var i=0;i<l;i++)
    // {
    //     if(title==note[i].title)
    //         break                  

        
    // }
    // note.splice(i,1)
    if(dupnote.length == note.length)
    {
        console.log(chalk.bgRed('note does note exists'))
    }
    else{
    note2=JSON.stringify(dupnote)
    fs.writeFileSync('note.json',note2)
    console.log(chalk.bgGreen('note deleted!'))
    }

}

const loadnote=function(){
    try{
        const dataBuffer=fs.readFileSync('note.json')
        const dataJSON=dataBuffer.toString()
        const data=JSON.parse(dataJSON)
        return data

    }catch(e)
    {
        return []
    }
}

const deleteAll=function(){
    
    fs.writeFileSync('note.json',"")
    console.log('note deleted')
}

const listnote=()=>{
    console.log(chalk.yellow('your notes:'))
    const note=loadnote('note.json')
    note.forEach(element => {
      console.log('-'+element.title)  
    })
}

const readnote=(title)=>{
    note=loadnote()
    try{
    const search=note.find((note)=>{
        return title==note.title
    })
    console.log('Title: '+chalk.bold.yellow.underline(search.title)+'\t'+'Body: '+search.body)
    }
    catch(e){
            console.log(chalk.bgRed('no note'))
        }
}
module.exports={
    getnotes:getnotes,
    addnote:addnote,
    loadnote:loadnote,
    deleteAll:deleteAll,
    remove:remove,
    listnote:listnote,
    readnote:readnote

}                              //send the functions, variables or objects to different files