package br.com.site.guvia.dto;

import java.sql.Blob;
import java.time.LocalDate;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import br.com.site.guvia.model.Avaliacao;

public class RequisicaoNovaAvaliacao {
	
	@NotBlank //NotBlank.requisicaoNovoPedido.nomeProduto=não pode estar em branco
	private String nomeProduto;
	
	@NotBlank
	private String urlProduto;
	
	@NotBlank
	private String urlImagem;
	private String descricao;
	
	public String getNomeProduto() {
		return nomeProduto;
	}
	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}
	public String getUrlProduto() {
		return urlProduto;
	}
	public void setUrlProduto(String urlProduto) {
		this.urlProduto = urlProduto;
	}
	public String getUrlImagem() {
		return urlImagem;
	}
	public void setUrlImagem(String urlImagem) {
		this.urlImagem = urlImagem;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Avaliacao toAvaliacao() {
		Avaliacao avaliacao = new Avaliacao();
		avaliacao.setDescricao(descricao);
		avaliacao.setNomeProduto(nomeProduto);
		avaliacao.setUrlImagem(urlImagem);
		avaliacao.setUrlProduto(urlProduto);
		return avaliacao;
	}

	
	
}
