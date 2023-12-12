package controllers;

import play.Logger;
import play.*;
import play.mvc.*;
import play.mvc.Http.*;
import play.libs.Json;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import views.html.*;
import models.*;


public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

    @BodyParser.Of(BodyParser.Json.class)
    public static Result login(){
        Result res;
        JsonNode req = request().body().asJson();
        String email = req.findPath("email").textValue();
        String password = req.findPath("password").textValue();

        /*
        Logger.debug("Entro a login");
        Logger.debug(email);
        Logger.debug(password);
        */

        Usuario p = new Usuario(email,password);
        if(p.getPassword().equals("12345")){
            ObjectNode result =  Json.newObject();
            result.put("Aceptado","wat");
            res = ok(result);
        }else{
            res = status(401,"No encontrado");
        }

        return res;
    }
}
