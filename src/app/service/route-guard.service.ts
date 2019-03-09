import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

// esse servico é responsavel em verificar se o usuario esta logado quando ele digita a url 
// de uma pagina que somente deve ser acessada quando o usuario esta logado. 
// a classe CanActive ajuda nessa verificacao 


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }


}
