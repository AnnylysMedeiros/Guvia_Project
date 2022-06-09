package br.com.site.guvia.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {

	@GetMapping("/index")
	public String index() {	
		return "index";	
	}
	
	@GetMapping("/aluguel_veiculos")
	public String aluguel_veiculos() {	
		return "aluguel_veiculos";
	
	}
	
	@GetMapping("/forum")
	public String forum() {	
		return "forum";
	}
	
	@GetMapping("/gastronomia")
	public String gastronomia() {	
		return "gastronomia";
	}
	
	@GetMapping("/hospedagem")
	public String hospedagem() {	
		return "hospedagem";
	}
	
	@GetMapping("/parques")
	public String parques() {	
		return "parques";
	}

	@GetMapping("/vidanoturna")
	public String vidanoturna() {	
		return "vidanoturna";
	}
	
	@GetMapping("/dicas_uteis")
	public String dicas_uteis() {	
		return "dicas_uteis";
	}
	
	@GetMapping("/locadora")
	public String locadora() {	
		return "locadora";
	}
}
