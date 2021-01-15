package br.gov.rj.petropolis.turispetro.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.rj.petropolis.turispetro.model.Client;
import br.gov.rj.petropolis.turispetro.model.County;
import br.gov.rj.petropolis.turispetro.model.Tourist;
import br.gov.rj.petropolis.turispetro.model.dto.TouristDTO;
import br.gov.rj.petropolis.turispetro.repositories.ClientRepository;
import br.gov.rj.petropolis.turispetro.repositories.CountyRepository;
import br.gov.rj.petropolis.turispetro.repositories.TouristRepository;

@Service
public class TouristService {

	@Autowired
	private TouristRepository touristRepository;

	@Autowired
	private CountyRepository countRepository;

	@Autowired
	private ClientRepository clientRepository;

	@Transactional
	public Page<Tourist> getall(Pageable pageable) {
		return touristRepository.findAll(pageable);
	}

	public Tourist getOne(Integer id) {
		Optional<Tourist> tourist = touristRepository.findById(id);
		if (tourist.isPresent()) {
			return tourist.get();
		}
		return null;
	}

	@Transactional
	public void createTourist(TouristDTO touristDTO) {
		County originCounty = countRepository.getOne(touristDTO.getOriginCountyId());
		County visitCounty = countRepository.getOne(touristDTO.getOriginCountyId());
		Client user = touristDTO.getUser();
		Client savedUser = clientRepository.save(user);
		savedUser = clientRepository.save(savedUser);
		
		Tourist tourist = new Tourist(touristDTO.getName(), touristDTO.getIr(), touristDTO.getGenre(), touristDTO.getStayTime(),
				touristDTO.getVisitReason(), touristDTO.getTransportation(), touristDTO.getWasAccompanied(), touristDTO.getAccompanyingNumber(),
				touristDTO.getAccommodation(), touristDTO.getEmail(), originCounty, visitCounty, savedUser); 
		touristRepository.save(tourist);
	}

	@Transactional
	public void deleteTourist(Integer id) {
		touristRepository.deleteById(id);
	}

	@Transactional
	public Tourist updateTourist(Integer id, TouristDTO touristDTO) {
		Optional<Tourist> touristOpt = touristRepository.findById(id);
		if (touristOpt.isPresent()) {
			Tourist tourist = touristOpt.get();
			if (touristDTO.getAccompanyingNumber() != null) {
				tourist.setAccompanyingNumber((touristDTO.getAccompanyingNumber()));
			}
			if (touristDTO.getEmail() != null) {
				tourist.setEmail(touristDTO.getEmail());
			}
			if (touristDTO.getGenre() != null) {
				tourist.setGenre(touristDTO.getGenre());
			}
			if (touristDTO.getIr() != null) {
				tourist.setIr(touristDTO.getIr());
			}
			if (touristDTO.getName() != null) {
				tourist.setName(touristDTO.getName());
			}
//			if(touristDTO.getOriginCounty()!=null) {
//				tourist.setOriginCounty(touristDTO.getOriginCounty());
//			}
			if (touristDTO.getStayTime() != null) {
				tourist.setStayTime(touristDTO.getStayTime());
			}
			if (touristDTO.getTransportation() != null) {
				tourist.setTransportation(touristDTO.getTransportation());
			}
//			if(touristDTO.getVisitCounty()!=null) {
//				tourist.setVisitCounty(touristDTO.getVisitCounty());
//			}
			if (touristDTO.getVisitReason() != null) {
				tourist.setVisitReason(touristDTO.getVisitReason());
			}
			return tourist;
		}
		return null;

	}

}
