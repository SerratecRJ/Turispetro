package br.gov.rj.petropolis.turispetro.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.gov.rj.petropolis.turispetro.model.BookMarks;
import br.gov.rj.petropolis.turispetro.model.Partner;
import br.gov.rj.petropolis.turispetro.model.Tourist;
import br.gov.rj.petropolis.turispetro.model.dto.BookMarksDTO;
import br.gov.rj.petropolis.turispetro.repositories.BookMarksRepository;
import br.gov.rj.petropolis.turispetro.repositories.PartnerRepository;
import br.gov.rj.petropolis.turispetro.repositories.TouristRepository;

@Service
public class BookMarksService {
	
	@Autowired
	private PartnerRepository partnerRepository;
	
	@Autowired
	private TouristRepository touristRepository;
	
	@Autowired
	private BookMarksRepository bookMarksRepository;
	
	public List<BookMarks> findAllByTouristId(Integer touristId) {
		List<BookMarks> allBookMark = bookMarksRepository.findAllByTouristId(touristId);
		return allBookMark;
	}
	
	public BookMarks findAllByTouristIdAndPartnerId(Integer touristId, Integer partnerId) {
		BookMarks bookMark = bookMarksRepository.findAllByTouristIdAndPartnerId(partnerId,touristId);
		return bookMark;
	}
	
	public void modifyBookMark(BookMarksDTO bookMarksDTO) {
		Optional<Tourist> foundTourist = touristRepository.findById(bookMarksDTO.getTouristId());
		Tourist tourist = foundTourist.get();
		Optional<Partner> foundPartner = partnerRepository.findById(bookMarksDTO.getPartnerId());
		Partner partner = foundPartner.get();
		BookMarks bookMarks = bookMarksRepository.findAllByTouristIdAndPartnerId(bookMarksDTO.getPartnerId(),bookMarksDTO.getTouristId());
		if(bookMarks == null) {
			BookMarks newBookMark = new BookMarks(tourist, partner, bookMarksDTO.getGrade(), true);
			bookMarksRepository.save(newBookMark);
		}
		else {
			if(bookMarks.getBookMark() == false) {
				bookMarks.setBookMark(true);
			}
			else {
				bookMarks.setBookMark(false);
			}
			bookMarksRepository.save(bookMarks);
		}
	}
	
	public void modifyGrade(BookMarksDTO bookMarksDTO) {
		Optional<Tourist> foundTourist = touristRepository.findById(bookMarksDTO.getTouristId());
		Tourist tourist = foundTourist.get();
		Optional<Partner> foundPartner = partnerRepository.findById(bookMarksDTO.getPartnerId());
		Partner partner = foundPartner.get();
		BookMarks bookMarks = bookMarksRepository.findAllByTouristIdAndPartnerId(bookMarksDTO.getPartnerId(),bookMarksDTO.getTouristId());
		if(bookMarks == null) {
			BookMarks newBookMark = new BookMarks(tourist, partner, bookMarksDTO.getGrade(), false);
			partner.setAverage((partner.getAverage()*partner.getTotalRate()+bookMarksDTO.getGrade())/(partner.getTotalRate()+1));
			partner.setTotalRate(partner.getTotalRate()+1);
			partnerRepository.save(partner);
			bookMarksRepository.save(newBookMark);
		}
		else {
			partner.setAverage((partner.getAverage()*partner.getTotalRate()+bookMarksDTO.getGrade()-bookMarks.getGrade())/partner.getTotalRate());
			partnerRepository.save(partner);
			bookMarks.setGrade(bookMarksDTO.getGrade());
			bookMarksRepository.save(bookMarks);
		}

 	}
}
