/*
options = {
	page:当前显示的页码，
	model:查询集合的名称，
	query:查询的条件，
	projection:投影，
	sort:排序,
	populates:关联查询
}
*/

async function pagination(options){
		/*
		分页：具体显示哪一页page由前台传入
		约定：每一页显示几条数据：limit = 3
		第一页显示：	1-3 skip （1-1）*3
		第二页显示：	4-6 skip  (2-1) *3
		第三页显示：	7-9 skip  (3-1) *3
		......
		第n页显示		skip  （page-1） *limit

		 */

	 let { page,model,query,projection,sort,populates } = options;
	 if(isNaN(page)){
	 	page = 1;
	 }
	 let limit = 3;

	 if(page == 0){
	 	page = 1;
	 }

	 //上一页边界控制
	 if(page <= 0){
	 	page = 1;
	 }
	 

	const counts = await model.countDocuments(query)
	 	//count是页面总条数
	 	// console.log(count);
	let pages = Math.ceil(counts/limit);
	// console.log(pages)
	let list = [];
	for(let i = 1;i<=pages;i++){
		list.push(i);
	}

	if(page>pages){
		page = pages;
	}
	if(page == 0){
		page = 1
	}

	//跳过数据的条数
	let skip = (page-1)*limit;

	//关联查询
	let result = model.find(query,projection)
	if(populates){
		populates.forEach(function(populate){
			result = result.populate(populate);
		})
	}

	//查询数据库用户信息
	const docs = await result.sort(sort).skip(skip).limit(limit)

	return {
		docs:docs,
		page:page,
		list:list,
		pages:pages
	}
}



module.exports = pagination;