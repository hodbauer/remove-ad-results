const removeElement = (id) => {
    const e = document.querySelector(id);
    e.parentElement.removeChild(e);
};

removeElement('#tvcap');
removeElement('#bottomads');
