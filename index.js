class Message {
  constructor(txt = 'Msg default', created = Date.now()) {
    this.txt = txt;
    this.created = created;
  }
  get created() {
    return `${this._created}`;
  }
  set created(created) {
    if (!created || isNaN(created)) {
      throw new Error('Invalid created');
    }
    this._created = created;
  }
  toString() {
    return `Menssage : ${this.txt}, Date :  ${this.created}`;
  }
}

class ImageMessage extends Message {
  constructor(txt = 'photoswics', created = Date.now(),
    url = 'http://google.com', thumbnail = 'xxx') {
    super(txt, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString(){
    return `${super.toString()} - URL: ${this.url} - Thumbnail: ${this.thumbnail}`;
  }

}

var emptyMessage = new Message();
var textMessage = new Message('Hello es6', Date.now());
var photoMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(textMessage instanceof ImageMessage);
console.log(emptyMessage instanceof ImageMessage);
