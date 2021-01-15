package br.gov.rj.petropolis.turispetro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.gov.rj.petropolis.turispetro.model.Tourist;

public interface TouristRepository extends JpaRepository<Tourist, Integer> {

}
