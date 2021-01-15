package br.gov.rj.petropolis.turispetro.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.gov.rj.petropolis.turispetro.model.Partner;

@Repository
public interface PartnerRepository extends JpaRepository<Partner,Integer>{

	@Query(value = "SELECT * "
	+ "FROM PARTNER "
	+ "WHERE LOWER(corporate_name) LIKE LOWER('%'||:corporateName||'%')", nativeQuery=true)
	Page<Partner> filters(String corporateName, Pageable pageRequest);
}
