package br.gov.rj.petropolis.turispetro.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import br.gov.rj.petropolis.turispetro.model.Partner;
import br.gov.rj.petropolis.turispetro.repositories.PartnerRepository;

@Service
public class PartnerService {

	@Autowired
	private PartnerRepository partnerRepository;
	
	public List<Partner> findByCategoryAndAverage(String searchTerm, Integer page, Integer size) {
		List<Partner> partner = partnerRepository.findByCategoryAndAverage(searchTerm.toLowerCase());
		return partner;
	}
}
