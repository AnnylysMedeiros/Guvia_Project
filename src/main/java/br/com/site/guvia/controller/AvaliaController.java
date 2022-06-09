package br.com.site.guvia.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.site.guvia.dto.RequisicaoNovaAvaliacao;
import br.com.site.guvia.model.Avaliacao;
import br.com.site.guvia.repository.AvaliacaoRepository;

@Controller
@RequestMapping("avalia")
public class AvaliaController {
	
	@Autowired
	private AvaliacaoRepository avaliacaoRepository;
	
	@GetMapping("formulario")
	public String formulario(RequisicaoNovaAvaliacao requisicao) {
		return "avalia/formulario";
	}

	
	@PostMapping("novo")
	public String novo(@Valid RequisicaoNovaAvaliacao requisicao, BindingResult result){
		if(result.hasErrors()) {
			return "avalia/formulario";
		}
		Avaliacao avalia = requisicao.toAvaliacao();
		avaliacaoRepository.save(avalia);
		
		return "redirect:/locadora"; 
	}
}
