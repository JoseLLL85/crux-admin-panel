import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Msal from 'msal';

declare var bootbox: any;
@Injectable()
export class MsalService {

    B2CTodoAccessTokenKey = "b2c.todo.access.token";

    tenantConfig = {
        tenant: "ChubbDigitalLADEV01.onmicrosoft.com",
        clientID: '7262c535-ad41-4ad0-a975-83734eba604f',
        signUpSignInPolicy: "B2C_1_PaneraTest",
        b2cScopes: ['https://ChubbDigitalLADEV01.onmicrosoft.com/PaneraTemplate/user_impersonation']
    };

    // Configure the authority for Azure AD B2C
    authority = "https://login.microsoftonline.com/tfp/" + this.tenantConfig.tenant + "/" + this.tenantConfig.signUpSignInPolicy;

    /*
     * B2C SignIn SignUp Policy Configuration
     */
    clientApplication = new Msal.UserAgentApplication(
        this.tenantConfig.clientID, this.authority,
        function (errorDesc: any, token: any, error: any, tokenType: any) {
            // Called after loginRedirect or acquireTokenPopup
        }
    );

    public login(): void {

        var _this = this;
        this.clientApplication.loginPopup(this.tenantConfig.b2cScopes).then(function (idToken: any) {
            _this.clientApplication.acquireTokenSilent(_this.tenantConfig.b2cScopes).then(

                function (accessToken: any) {

                    _this.saveAccessTokenToCache(accessToken);


                    console.log("token receibed successfuly :"+accessToken);
                }, function (error: any) {
                    _this.clientApplication.acquireTokenPopup(_this.tenantConfig.b2cScopes).then(
                        function (accessToken: any) {
                            _this.saveAccessTokenToCache(accessToken);
                            //sessionStorage.getItem(token_ident);


                        }, function (error: any) {
                            bootbox.alert("Error acquiring the popup:\n" + error);
                        });
                })
        }, function (error: any) {
            bootbox.alert("Error during login:\n" + error);
        });
    }

    saveAccessTokenToCache(accessToken: string): void {
        sessionStorage.setItem(this.B2CTodoAccessTokenKey, accessToken);
    };

    logout(): void {
        this.clientApplication.logout();
    };

    isOnline(): boolean {
        return this.clientApplication.getUser() != null;
    };
}
