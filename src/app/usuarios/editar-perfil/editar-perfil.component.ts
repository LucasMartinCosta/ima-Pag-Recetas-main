import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarLoginComponent } from "../../navegadores/nav-bar-login/nav-bar-login.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';
import { UserActivo } from '../../interfaces/user-activo';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [NavBarLoginComponent, FooterComponent,ReactiveFormsModule],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent implements OnInit {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  rutas = inject(Router);
  userACT:UserActivo={
    id:0,
    nombreUsuario:''
  };

  userComun:User={
    nombreUsuario:'',
    contrasena:'',
    listas:[]
  };
  fb = inject(FormBuilder);
  servicioUser = inject(UsuariosService);

  formulario=this.fb.nonNullable.group({
    nombre:['',[Validators.required]],
    email:['',[Validators.required]]
  })

   ngOnInit(): void {
    this.servicio.getUserActivo().subscribe(
      {
        next:(usuario)=>{
          this.userACT=usuario[0];
          this.servicio.getUSerById(this.userACT.id).subscribe({

            next:(usuario)=>
            {
              this.userComun=usuario;
              this.formulario.patchValue({
                nombre: this.userComun.nombreUsuario,
                email: this.userComun.email
              });
            },
            error:(err:Error)=>
            {
              console.log(err.message);
            }
          })
        },
        error:(err:Error)=>{
          console.log(err.message);
        }
      }
    )
  }

  servicio = inject(UsuariosService);
  imagenPerfil = "img/perfil-de-usuario.web"; 

  editPerfil()
  {
    
  }


}