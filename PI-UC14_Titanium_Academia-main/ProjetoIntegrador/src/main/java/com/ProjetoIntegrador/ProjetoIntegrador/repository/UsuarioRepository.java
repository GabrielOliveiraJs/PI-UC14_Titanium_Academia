package com.ProjetoIntegrador.ProjetoIntegrador.repository;
/*
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.ProjetoIntegrador.ProjetoIntegrador.models.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, String>{
	Usuario findByCodigo(long codigo);
	List<Usuario> findByNome(String nome);
}*/


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ProjetoIntegrador.ProjetoIntegrador.models.Usuario;


public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
	
	Usuario findById(long codigo);
	Usuario findByNome(String nome);
	
	// Query para a busca
	@Query(value = "select u from Usuario u where u.nome like %?1%")
	List<Usuario>findByNomes(String nome);

}
