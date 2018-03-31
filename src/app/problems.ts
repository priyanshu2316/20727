export class problems{
  constructor(
 public username:string,
 public category:string,
 public description: string,
 public location: string,
 public image: string,
 public status:string,
 public padmin:string,
 public dateS :string
){}
public put(
usernam:string,
categor:string,
descriptio: string,
locatio: string,
imag: string,
statu:string,
padmi:string
)
{
  this.username=usernam;
  this.category=categor;
  this.description=descriptio;
  this.location=locatio;
  this.image=imag;
  this.status=statu;
  this.padmin=padmi
}
}
