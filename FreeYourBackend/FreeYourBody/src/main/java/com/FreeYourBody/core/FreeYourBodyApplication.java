package com.FreeYourBody.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;


@SpringBootApplication
public class FreeYourBodyApplication {

	public static void main(String[] args) {
		SpringApplication.run(FreeYourBodyApplication.class, args);
	}
	
	public void run(String...args) throws Exception {
		//Agrega credenciales
		MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
	}

}
