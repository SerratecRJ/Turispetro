package br.gov.rj.petropolis.turispetro.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.gov.rj.petropolis.turispetro.model.Partner;

public interface PartnerRepository extends JpaRepository<Partner,Integer> {

	@Query("from Partner p WHERE LOWER(p.category) LIKE %:searchTerm%")
	List<Partner> findByCategoryAndAverage(@Param("searchTerm") String searchTerm);

}
