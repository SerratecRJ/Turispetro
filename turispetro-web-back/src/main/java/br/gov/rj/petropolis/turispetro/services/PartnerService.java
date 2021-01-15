package br.gov.rj.petropolis.turispetro.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.gov.rj.petropolis.turispetro.model.Partner;
import br.gov.rj.petropolis.turispetro.model.dto.PartnerDTO;
import br.gov.rj.petropolis.turispetro.repositories.CategoryRepository;
import br.gov.rj.petropolis.turispetro.repositories.ClientRepository;
import br.gov.rj.petropolis.turispetro.repositories.CountyRepository;
import br.gov.rj.petropolis.turispetro.repositories.PartnerRepository;
import br.gov.rj.petropolis.turispetro.services.exceptions.DatabaseException;
import br.gov.rj.petropolis.turispetro.services.exceptions.ResourceNotFoundException;

@Service
public class PartnerService {
	
	@Autowired
	PartnerRepository partnerRepository;
	
	@Autowired
	ClientRepository clientRepository;
	
	@Autowired
	CountyRepository countyRepository;
	
	@Autowired
	CategoryRepository categoryRepository;
	

	@Transactional
	public Page<PartnerDTO> findAllPages(PageRequest pageRequest) {

		Page<Partner> list = partnerRepository.findAll(pageRequest);

		return list.map(x -> new PartnerDTO(x));
	}

	@Transactional(readOnly = true)
	public Page<PartnerDTO> findByName(String corporateName, PageRequest pageRequest) {
		Page<Partner> list = partnerRepository.filters(corporateName, pageRequest); 
		return list.map(x -> new PartnerDTO(x));
	}
	
	@Transactional
	public PartnerDTO insert(PartnerDTO partner) {
		Partner part = new Partner();
		copyDTOToModel(partner, part);
		part = partnerRepository.save(part);
		return new PartnerDTO(part);
	}

	private void copyDTOToModel(PartnerDTO partner, Partner part) {
		part.setCorporateName(partner.getCorporateName());
		part.setCompanyName(partner.getCompanyName());
		part.setLatitude(partner.getLatitude());
		part.setLongitude(partner.getLongitude());
		part.setUrl(partner.getUrl());
		part.setNrle(partner.getNrle());
		part.setStreet(partner.getStreet());
		part.setStreetNumber(partner.getStreetNumber());
		part.setPhone(partner.getPhone());
		part.setWhatsapp(partner.getWhatsapp());
		part.setCapability(partner.getCapability());
		part.setAverage(partner.getAverage());
		part.setFeatured_photo(partner.getFeatured_photo());
		part.setRegisterDate(partner.getRegisterDate());
		part.setCategory(categoryRepository.getOne(partner.getCategory_id()));
		part.setCounty(countyRepository.getOne(partner.getCounty_id()));
		part.setUser(clientRepository.getOne(partner.getUser_id()));

	}

	@Transactional
	public PartnerDTO update(Integer id, PartnerDTO partner) {

		try {
			Partner part = partnerRepository.getOne(id);
			copyDTOToModel(partner, part);
			part = partnerRepository.save(part);
			return new PartnerDTO(part);
		} catch (EntityNotFoundException e) {

			throw new ResourceNotFoundException("Partner com o ID: " + id + " não encontrado.");

		}

	}

	public void delete(Integer id) {
		try {
			partnerRepository.deleteById(id);
        }
        catch(EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Partner com o id: " + id + " não encontrado!");
        }
        catch(DataIntegrityViolationException e) {
            throw new DatabaseException("Partner com o id: " + id + " não pode ser apagado!");
        }
		
	}

}
