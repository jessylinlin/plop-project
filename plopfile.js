//plop入口文件 导出一个函数
//函数接收一个plop对象 ，该对象提供不同工具 
module.exports = plop => {
    plop.setGenerator('component', {
        description: 'create component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name',
            default: 'my component'
        }],
        actions: [{
            type: 'add',
            //目标
            path: 'src/components/{{name}}/{{name}}.js',
            //模板文件
            templateFile: 'plop-templates/component.hbs'
        }]
    })
}