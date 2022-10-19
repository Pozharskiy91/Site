const model=[
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value:'here we go with some text'},
    {type: 'columns', value:[
        '12121212',
        '333333333',
        '222222222']}]

const $site = document.querySelector('#site')

model.forEach(block =>{
    
    let html =''
    
    if(block.type === 'title'){
        html = `
       <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `
    }else if(block.type === 'text'){
        html = `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
    }else if(block.type === 'columns'){
        html = `
        <div class="row">
        <div class="col-sm">
            ${block.value[0]}
        </div>
        <div class="row">
        <div class="col-sm">
            ${block.value[1]}
        </div>
        <div class="row">
        <div class="col-sm">
            ${block.value[2]}
        </div>
        `
    }
      $site.insertAdjacentHTML('beforeend', html)
})