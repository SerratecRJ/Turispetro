package br.gov.rj.petropolis.turispetro.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.gov.rj.petropolis.turispetro.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client,Integer>{

	Client findByLogin(String userName);
	
	@Query(value = "SELECT * "
	+ "FROM USER_REG "
	+ "WHERE LOWER(login) LIKE LOWER ('%'||:login||'%')", nativeQuery=true)
	Page<Client> filters(String login, Pageable pageRequest);
}
