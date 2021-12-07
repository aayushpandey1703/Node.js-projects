// start project with 'npm init' cmd
// no need to upload node_modules folder to repo simply use npm install cmd to install all dependencies of project downloaded from github

const file=require('fs')
const notes=require('./note.js')
const yargs=require('yargs')



//create add command 
yargs.command({                         //commands like add delete used using yargs are alternate method of if-else case mentioned at breakpoint
    command: 'add',
    describe:'add a new note',
    //to describe the arguments of add comand 
    builder:{
        title:{
            describe:'add title of note',
            demandOption: true,                   //required to add title
            type:'string'                        //title should be string
        },
        body:{
            describe:'add your content',
            demandOption:true,
            type:'string'
        }
      
    },
    handler:function(argv){
        const msg=notes.addnote(argv.title,argv.body)
        console.log(msg)
    }
})

yargs.command({
    command:'deleteAll',
    describe:'delete note',
   
    handler:function(){
        notes.deleteAll()
    }
})
yargs.command({
    command:'remove',
    describe:'delete a note',
    builder:{
        title:{
            describe:'enter title of note',
            demandOption:true,
            type:'string'
        }
    },
   
    handler:function(argv){
        notes.remove(argv.title)
    }
})


yargs.command({
    command:'read',
    describe:'Read the file',
    builder:{
        title:{
            describe:"enter title to find note",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readnote(argv.title)
    }
        
    

})

yargs.command({
    command:'list',
    describe:'show the list',
    handler:function(){
        notes.listnote()
    }

})



yargs.parse()  //to enable parse single time instead of using yargs.argv

//console.log(yargs.argv)



// const choice=process.argv[2]  // process.argv is used to display text after 'node app.js' command in terminal in array form

// if(choice === 'add')
// {
//     note=process.argv[3].substring(8)
//     file.appendFileSync('note2.txt','\n'+note)   
// }