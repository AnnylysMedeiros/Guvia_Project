package br.com.site.guvia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import br.com.site.guvia.model.Avaliacao;
import br.com.site.guvia.repository.AvaliacaoRepository;


@Controller
public class AvaliacaoController {
	
	@Autowired
	private AvaliacaoRepository repository;
	
	@GetMapping("/locadora")
	public String locadora(Model model) {
		
		List<Avaliacao> avaliacoes = repository.findAll();
		model.addAttribute("avaliacoes", avaliacoes);
		return "locadora";
	}
}
