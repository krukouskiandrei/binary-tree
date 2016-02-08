'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.root != null) {
			var flac = this.root;
			while (true) {
				if(flac.data < data){
					if(flac.right == null){
						flac.right = new Node(data);
						break;
					}
					flac = flac.right;
				}else {
					if(flac.left == null){
						flac.left = new Node(data);
						break;
					}
					flac = flac.left;
				}
			}
		}else {
			this.root = new Node(data);
		}
	}

	contains(data) {
		var flac = true;
		var r = this.root;
		while(flac){
			if(r == null){
				return false;
			}else{
				if(r.data > data){
					r = r.left;
					continue;
				}
				if(r.data < data){
					r = r.right;
					continue;
				}
				if(r.data == data){
					return true;
				}
			}
		}
	}

	remove(data) {
		if(this.root.data != null){
			var flac = this.root;
			var flacRoot = new Node();
			while(true){
				if(flac.data == data){
					if(flac.left == null && flac.right == null){
						if(flacRoot.data != null){
							if(flacRoot.left != null){
								if(flacRoot.left.data == flac.data){
									flacRoot.left = null;
								}
							}else{
								flacRoot.right = null;
							}
						}else{
							this.root = null;
						}
						return true;
					}
					if(flac.left != null){
						if(flac.right != null){
							var flacNode = flac.right;
							var f = true;
							while(f){
								if(flacNode.left != null){
									flacNode = flacNode.left;
								}else{
									f = false;
								}
							}
							if(flacRoot.data != null){
								flacNode.left = flac.left;
								if(flacRoot.left.data == flac.data){
									flacRoot.left = flac.right;
								}else{
									flacRoot.right = flac.right;
								}
							}else{
								flacNode.left = flac.left;
								this.root = flac.right;
							}
							return true;
						}else{
							if(flacRoot.left.data == flac.data){
									flacRoot.left = flac.left;
							}else{
									flacRoot.right = flac.left;
							}
							return true;
						}
					}
					if(flac.right.data != null){
						if(flac.left.data != null){
							var flacNode = flac.right;
							var f = true;
							while(f){
								if(flacNode.left != null){
									flacNode = flacNode.left;
								}else{
									f = false;
								}
							}
							if(flacRoot.data != null){
								flacNode.left = flac.left;
								if(flacRoot.left.data == flac.data){
									flacRoot.left = flac.right;
								}else{
									flacRoot.right = flac.right;
								}
							}else{
								flacNode.left = flac.left;
								this.root = flac.right;
							}
							return true;
						}else{
							if(flacRoot.left.data == flac.data){
									flacRoot.left = flac.right;
							}else{
									flacRoot.right = flac.right;
							}
							return true;
						}
					}

				}else{
					if(flac.data < data){
						if(flac.right != null){
							flacRoot = flac;
							flac = flac.right;
						}else{
							return false;
						}
					}else{
						if(flac.left != null){
							flacRoot = flac;
							flac = flac.left;
						}else{
							false;
						}
					}
				}
			}
		}else{
			return false;
		}
	}

	size() {
		var count = 0;
		if(this.root != null){
			count = 1;
			if(this.root.left != null){
				count += this.countNode(this.root.left);
			}
			if(this.root.right != null){
				count += this.countNode(this.root.right);
			}
		}
		return count;
	}

	isEmpty() {
		if(this.root != null){
			return false;
		}else{
			return true;
		}
	}
	countNode(data){
		var coun = 1;
		if(data.left != null){
			coun += this.countNode(data.left);
		}
		if(data.right != null){
			coun += this.countNode(data.right);
		}
		return coun;
	}
}
