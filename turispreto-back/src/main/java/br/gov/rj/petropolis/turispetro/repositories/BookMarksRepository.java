package br.gov.rj.petropolis.turispetro.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.gov.rj.petropolis.turispetro.model.BookMarks;


public interface BookMarksRepository extends JpaRepository<BookMarks,Integer> {

	@Query("from BookMarks b WHERE b.bookMark = true")
	List<BookMarks> findAllByTouristId(Integer touristId);
	
	List<BookMarks> findAllByPartnerId(Integer partnerId);

	BookMarks findAllByTouristIdAndPartnerId(Integer partnerId, Integer touristId);

}
