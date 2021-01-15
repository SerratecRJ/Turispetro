package br.gov.rj.petropolis.turispetro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.gov.rj.petropolis.turispetro.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client,Integer>{

	Client findByLogin(String userName);
}
