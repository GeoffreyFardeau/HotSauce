import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SauceService } from '../sauce.service';
import { Sauces } from '../sauces';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-sauce-infos',
  templateUrl: './sauce-infos.component.html',
  styles: [
  ]
})
export class SauceInfosComponent implements OnInit{
  sauceList: Sauces[] | undefined
  sauce: any
  sauceComments = [];
  newCommentText: string ='';



  finalNoteArray: number[] = [];

  constructor(private sauceService: SauceService, private route: ActivatedRoute, private router: Router, private loginService: LoginService) { 
  
  }
  ngOnInit(): void  {
    const sauceId: string | null = this.route.snapshot.paramMap.get('id');
    console.log(sauceId)

    if(sauceId) {
      let sauce = this.sauceService.getSauceById(+sauceId).subscribe(sauce => {this.sauce = sauce
        this.boucleSauce(sauce)})
    } else {
      this.sauce = undefined
    }
   

   
  }

  boucleSauce(sauce: Sauces) {
    for (let i = 0; i < sauce.spicyness ; i++) {
      console.log(sauce.spicyness)
      this.finalNoteArray.push(i + 1);
   
  }}

deleteSauce(id: any){
  this.sauceService.deleteSauce(id).subscribe((response) => this.router.navigate(['/sauces']));
  

}
comSubmit(id: any){
const decodedToken = this.loginService.getToken()
if(decodedToken && this.sauce){
  const newComment = {
    comment_text: this.newCommentText,
    sauce_id: id,
    user_id: decodedToken.id
  }

  this.sauceService.addComment(newComment).subscribe((response) =>  {
    this.sauce.comments.push(response)
    this.newCommentText = ''
  });
  console.log(newComment)
}




}}
