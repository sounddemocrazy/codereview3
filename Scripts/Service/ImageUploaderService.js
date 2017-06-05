app.service('ImageUploaderService', function($http, Upload){
	return{
		UploadArticleBanner : function(file, articleId)
		{			
			var param = {file: file, ObjectId : articleId, RefObjectId:0, PhotoType: 12};
			
			return UploadCore(Upload,param);
		}
	}

	function UploadCore(Upload,param)
	{
		return Upload.upload({
				   url: PhotoUploadAPIUrl,	
				   method: 'POST',
				   data: param,
				   headers:{'Authorization': 'Bearer '+MemoryGetFromClient('TOKEN')
				   },
				 })
	}	
});


