function MemorySaveInClient(key, Value)
{
	localStorage.setItem(key, Value);
}

function MemoryGetFromClient(key)
{
	var item= localStorage.getItem(key);
	if(item === undefined || item === null || item.length == 0)
		return '';
	else 
		return item;
}

function MemoryIsKeyExists(key)
{
	var item = MemoryGetFromClient(key);
	if(item === undefined || item === null || item.length == 0)
		return false;
	
	return true;	
}

function MemoryRemoveFromClient(key)
{
	localStorage.removeItem(key);
}

