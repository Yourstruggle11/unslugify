function unslugify(slugs,args) {
    if (typeof slugs !== 'string') {
        throw new Error('unslugify: slug must be string')
    }
    args = (typeof args === 'string') ? {replacement: args} : args || {}

    var capitalizeEachWord = args.capitalizeEachWord === undefined ? false : args.capitalizeEachWord
    var lower = args.lower === undefined ? true : args.lower
    var replacement = args.replacement === undefined ? "-" : args.replacement

    if(replacement === "_"){
        slugs = slugs.replace(/_/g, '_');
        slugs = slugs.replace(/--/g, '_');
    
        var list = [];
        slugs.split('_').forEach(function (slug) {
            capitalizeEachWord ? list.push(slug.substr(0, 1).toUpperCase() + slug.substr(1)) : list.push(slug.substr(0, 1)+ slug.substr(1)) 
        })
        if(lower){
            return list.join(' ');
        }
        else{
            return list.join(' ').toUpperCase();
        }
    }
    else{
        slugs = slugs.replace(/_/g, '-');
        slugs = slugs.replace(/--/g, '-');
    
        var list = [];
        slugs.split('-').forEach(function (slug) {
            capitalizeEachWord ? list.push(slug.substr(0, 1).toUpperCase() + slug.substr(1)) : list.push(slug.substr(0, 1)+ slug.substr(1)) 
        })
        if(lower){
            return list.join(' ');
        }
        else{
            return list.join(' ').toUpperCase();
        }
    }
}




module.exports = unslugify;